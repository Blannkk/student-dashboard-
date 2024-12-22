// src/middlewares/validation.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';
import { ApiError } from './error.middleware';

export const validate = (schema: Schema) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        try {
            const { error } = schema.validate(req.body, {
                abortEarly: false, // Show all validation errors
                allowUnknown: false, // Don't allow fields not in schema
                stripUnknown: true // Remove fields not in schema
            });

            if (error) {
                const errorMessage = error.details
                    .map(detail => detail.message)
                    .join(', ');
                    
                throw new ApiError(400, errorMessage);
            }

            next();
        } catch (error) {
            next(error);
        }
    };
};

// Additional validation middleware for ID parameters
export const validateId = (req: Request, _res: Response, next: NextFunction) => {
    const id = req.params.id;
    
    // Check if ID is a valid MongoDB ObjectId
    const objectIdRegex = /^[0-9a-fA-F]{24}$/;
    
    if (!objectIdRegex.test(id)) {
        throw new ApiError(400, 'Invalid ID format');
    }

    next();
};

// Optional: Query parameter validation middleware
export const validateQueryParams = (schema: Schema) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        try {
            const { error } = schema.validate(req.query, {
                abortEarly: false,
                allowUnknown: false,
                stripUnknown: true
            });

            if (error) {
                const errorMessage = error.details
                    .map(detail => detail.message)
                    .join(', ');
                    
                throw new ApiError(400, errorMessage);
            }

            next();
        } catch (error) {
            next(error);
        }
    };
};