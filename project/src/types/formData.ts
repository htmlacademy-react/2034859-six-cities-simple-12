export type FormData = {
  comment: string;
  rating: number;
  isValid: boolean;
  isDisabled: boolean;
  isErrorActive: boolean;
};

export type PartialFormData = {
  comment?: string;
  rating?: number;
  isValid?: boolean;
  isDisabled?: boolean;
  isErrorActive?: boolean;
};

