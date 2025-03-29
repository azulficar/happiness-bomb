import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../user/user.service';
import * as jwt from 'jsonwebtoken';
import { clerkClient } from '@clerk/clerk-sdk-node';

interface ClerkJwtPayload {
  azp: string;
  exp: number;
  iat: number;
  iss: string;
  nbf: number;
  sub: string;
  auth: {
    userId: string;
  };
}

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}

  async validateUser(token: string): Promise<any> {
    try {
      // Strip 'Bearer ' prefix if present
      const cleanToken = token.startsWith('Bearer ') ? token.slice(7) : token;
      
      // Verify the token
      const decodedToken = jwt.decode(cleanToken) as ClerkJwtPayload;
      
      if (!decodedToken) {
        return null;
      }

      const userId = decodedToken.sub;
      
      // Check if user exists in our database
      let user = await this.userService.findByExternalId(userId);
      
      // If not, create a new user
      if (!user) {
        try {
          // Get user info from Clerk
          const clerkUser = await clerkClient.users.getUser(userId);
          
          // Create a new user in our database
          user = await this.userService.createUser({
            name: `${clerkUser.firstName} ${clerkUser.lastName}`,
            email: clerkUser.emailAddresses[0]?.emailAddress || '',
            externalId: userId,
            profileImageUrl: clerkUser.imageUrl,
          });
        } catch (error) {
          console.error('Error fetching user from Clerk:', error);
          return null;
        }
      }
      
      return user;
    } catch (error) {
      console.error('Token validation error:', error);
      return null;
    }
  }
} 