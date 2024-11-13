import { Observable } from '@nativescript/core';
import { Uniform, Player } from '../../models/uniform';

export class InventoryViewModel extends Observable {
    private _uniforms: Uniform[] = [];
    private _players: Player[] = [];

    constructor() {
        super();
        this.loadData();
    }

    get uniforms(): Uniform[] {
        return this._uniforms;
    }

    get players(): Player[] {
        return this._players;
    }

    private loadData() {
        // Load sample data
        this._uniforms = [
            {
                id: '1',
                type: 'Jersey',
                size: 'L',
                number: 10,
                condition: 'Good',
                status: 'Available'
            },
            {
                id: '2',
                type: 'Shorts',
                size: 'M',
                number: 10,
                condition: 'Good',
                status: 'Checked Out'
            }
        ] as Uniform[];

        this._players = [
            {
                id: '1',
                name: 'John Doe',
                position: 'Forward',
                jerseyNumber: 10,
                contact: '555-0123',
                assignedUniforms: ['2']
            }
        ] as Player[];

        this.notifyPropertyChange('uniforms', this._uniforms);
        this.notifyPropertyChange('players', this._players);
    }

    onUniformTap(args: any) {
        console.log('Uniform tapped:', this._uniforms[args.index]);
    }

    onPlayerTap(args: any) {
        console.log('Player tapped:', this._players[args.index]);
    }

    onAddTap() {
        console.log('Add new item');
    }
}