import {autoinject} from "aurelia-framework";
import {CubeService} from "./cube-service";

export interface IDim {
  AttributeHierarchiesCount: number;
  Caption: string;
  Description: string;
  DimensionType: number;
  HierarchiesCount: number;
  Name: string;
  UniqueName: string;
  WriteEnabled: boolean;
}

@autoinject
export class CubeModel {
  
  constructor(private _svc: CubeService) {

  }

  
  getCubeDims(db: string, cube: string) :IDim[] {
    let lvds = this._svc.getDimData() as IDim[];
    return lvds;
  }
  
}
