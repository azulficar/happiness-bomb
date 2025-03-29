import { Test, TestingModule } from '@nestjs/testing';
import { HappinessBombService } from '../src/modules/happiness-bomb/happiness-bomb.service';
import { PrismaService } from '../src/modules/prisma/prisma.service';
import { BombStatus } from '@prisma/client';

// Create a mock for the PrismaService
const mockPrismaService = {
  happinessBomb: {
    create: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
  },
};

describe('HappinessBombService', () => {
  let service: HappinessBombService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HappinessBombService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<HappinessBombService>(HappinessBombService);
    prismaService = module.get<PrismaService>(PrismaService);
    
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createHappinessBomb', () => {
    it('should create a happiness bomb with DRAFT status', async () => {
      // Mock data
      const creatorId = 'user-123';
      const bombData = {
        title: 'Test Bomb',
        description: 'Test Description',
        recipientId: 'user-456',
      };
      
      const createdBomb = {
        id: 'bomb-123',
        ...bombData,
        creatorId,
        status: BombStatus.DRAFT,
        createdAt: new Date(),
        updatedAt: new Date(),
        scheduledSendTime: null,
        sentAt: null,
        creator: { id: creatorId, name: 'Creator Name' },
        recipient: { id: 'user-456', name: 'Recipient Name' },
      };
      
      // Setup mock implementation
      mockPrismaService.happinessBomb.create.mockResolvedValue(createdBomb);
      
      // Call the service method
      const result = await service.createHappinessBomb(creatorId, bombData);
      
      // Assertions
      expect(mockPrismaService.happinessBomb.create).toHaveBeenCalledWith({
        data: {
          ...bombData,
          creatorId,
          status: BombStatus.DRAFT,
        },
        include: {
          creator: true,
          recipient: true,
        },
      });
      
      expect(result).toEqual(createdBomb);
      expect(result.status).toBe(BombStatus.DRAFT);
    });
  });

  describe('sendHappinessBomb', () => {
    it('should update a happiness bomb to SENT status and set sentAt', async () => {
      // Mock data
      const bombId = 'bomb-123';
      const currentDate = new Date();
      
      const updatedBomb = {
        id: bombId,
        title: 'Test Bomb',
        description: 'Test Description',
        creatorId: 'user-123',
        recipientId: 'user-456',
        status: BombStatus.SENT,
        createdAt: new Date('2023-01-01'),
        updatedAt: currentDate,
        scheduledSendTime: null,
        sentAt: currentDate,
        creator: { id: 'user-123', name: 'Creator Name' },
        recipient: { id: 'user-456', name: 'Recipient Name' },
      };
      
      // Setup mock implementation
      jest.spyOn(global, 'Date').mockImplementation(() => currentDate);
      mockPrismaService.happinessBomb.update.mockResolvedValue(updatedBomb);
      
      // Call the service method
      const result = await service.sendHappinessBomb(bombId);
      
      // Assertions
      expect(mockPrismaService.happinessBomb.update).toHaveBeenCalledWith({
        where: { id: bombId },
        data: {
          status: BombStatus.SENT,
          sentAt: currentDate,
        },
        include: {
          creator: true,
          recipient: true,
        },
      });
      
      expect(result).toEqual(updatedBomb);
      expect(result.status).toBe(BombStatus.SENT);
      expect(result.sentAt).toBe(currentDate);
      
      // Clean up Date mock
      jest.restoreAllMocks();
    });
  });
}); 