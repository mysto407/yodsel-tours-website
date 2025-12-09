// placeToursMapping.ts
export interface PlaceTourMapping {
    [placeId: number]: string[];
  }
  
  export const placeToursMapping: PlaceTourMapping = {
    1: ['TSQ004', 'HTJ006', 'FVE010', 'CVO010'], // Tiger's Nest Monastery - in all tours
    2: ['HTJ006', 'FVE010', 'CVO010'], // Punakha Dzong
    3: ['FVE010', 'CVO010'], // Phobjikha Valley
    4: ['HTJ006', 'FVE010', 'CVO010'], // Dochula Pass
    5: ['FVE010', 'CVO010'], // Buddha Dordenma
    6: ['FVE010'] // Haa Valley
  };