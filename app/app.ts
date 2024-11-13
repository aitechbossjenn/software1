import { Application } from '@nativescript/core';
import { DatabaseService } from './services/database.service';

// Initialize database service
global.database = new DatabaseService();

Application.run({ moduleName: 'app-root' });