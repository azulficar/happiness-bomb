export interface Contribution {
  id: string;
  bombId: string;
  contributorId: string;
  message: string;
  photos: string[];
  createdAt: Date;
  updatedAt: Date;
  hiddenByContributor: boolean;
}

export interface ContributionCreateInput {
  bombId: string;
  message: string;
  photos?: string[];
}

export interface ContributionUpdateInput {
  message?: string;
  photos?: string[];
  hiddenByContributor?: boolean;
} 