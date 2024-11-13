import { EventData, Page } from '@nativescript/core';
import { InventoryViewModel } from './inventory-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new InventoryViewModel();
}