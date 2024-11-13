import { Observable } from '@nativescript/core';

export class DatabaseService extends Observable {
  private uniforms: Map<string, any> = new Map();
  private players: Map<string, any> = new Map();

  // Simulate database operations
  addUniform(uniform: any) {
    this.uniforms.set(uniform.id, uniform);
  }

  getUniform(id: string) {
    return this.uniforms.get(id);
  }

  getAllUniforms() {
    return Array.from(this.uniforms.values());
  }

  addPlayer(player: any) {
    this.players.set(player.id, player);
  }

  getPlayer(id: string) {
    return this.players.get(id);
  }

  getAllPlayers() {
    return Array.from(this.players.values());
  }
}