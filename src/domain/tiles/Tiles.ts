/**
 * Модуль экспортирует сущность плитки.
 * 
 * @author gjmazai
 */

import { action, makeObservable, observable } from "mobx";
import { EDuration, EManPosition, EPlace, ETileTurn, ETileTipe, ITiles, type TTilePosition } from "./ITiles";

export class Tiles implements ITiles {

	constructor ( type: ETileTipe ) {
		makeObservable( this );
		this.type = type;
		this.tileTurn = ETileTurn.top;
		this.setStaticData();
	}

	@observable
	tilePosition: TTilePosition;

	@observable
	tileTurn: ETileTurn;

	@observable
	isInstalled: boolean;
	
	@observable
	tileEndsList: [ EPlace, EPlace, EPlace, EPlace ];

	type: ETileTipe;

	id: number;

	maxCount: number;

	manPositionList: EManPosition[];

	manPosition?: EManPosition;

	@action
	setTilePosition( position: TTilePosition ): void {
		this.tilePosition = position;
		this.isInstalled = true;
		//TODO Отправить сигнал о том, что нужно отнять из общего сбора тайл такого типа.
	}

	@action
	setTileTurn( duration: EDuration ): void {
		const { right } = EDuration;
		const placeList = this.tileEndsList;

		if( duration === right ) {
			this.tileTurn = this.tileTurn++;
			placeList.unshift( placeList[ 3 ] );
			placeList.pop();
			this.tileEndsList = [ ...placeList ];
		} else {
			this.tileTurn = this.tileTurn--;
			placeList.push( placeList[ 0 ] );
			placeList.shift();
			this.tileEndsList = [ ...placeList ];
		}
	}

	//TODO подумать как его ставить и в какие места
	setManPosition: ( manPosition: EManPosition ) => void;

	/** Метод устанавливает местность для края плитки. */
	@action
	private setStaticData(): void {
		const { road, castle, field } = EPlace;

		switch( this.type ) {
			case ETileTipe.CastleCenter:
				this.tileEndsList = [ castle, castle, castle, castle ];
				this.maxCount = 1;
				break;
			case ETileTipe.CastleCenterEntry:
				this.tileEndsList = [ castle, castle, road, castle ];
				this.maxCount = 4;
				break;
			case ETileTipe.CastleCenterSide:
				this.tileEndsList = [ castle, castle, field, castle ];
				this.maxCount = 4;
				break;
			case ETileTipe.CastleSidesEdge:
				this.tileEndsList = [ castle, field, field, castle ];
				this.maxCount = 4;
				break;
			case ETileTipe.CastleSidesEdgeRoad:
				this.tileEndsList = [ castle, road, road, castle ];
				this.maxCount = 4;
				break;
			case ETileTipe.CastleSidesRoad:
				this.tileEndsList = [ castle, road, castle, road ];
				this.maxCount = 2;
				break;
			case ETileTipe.CastleTube:
				this.tileEndsList = [ field, castle, field, castle ];
				this.maxCount = 4;
				break;
			case ETileTipe.CastleWall:
				this.tileEndsList = [ castle, field, field, field ];
				this.maxCount = 4;
				break;
			case ETileTipe.CastleWallCurveLeft:
				this.tileEndsList = [ castle, field, road, road ];
				this.maxCount = 4;
				break;
			case ETileTipe.CastleWallCurveRight:
				this.tileEndsList = [ castle, road, road, field ];
				this.maxCount = 4;
				break;
			case ETileTipe.CastleWallEntry:
				this.tileEndsList = [ castle, field, road, field ];
				this.maxCount = 4;
				break;
			case ETileTipe.CastleWallEntryLeft:
				this.tileEndsList = [ castle, field, field, road ];
				this.maxCount = 4;
				break;
			case ETileTipe.CastleWallEntryRight:
				this.tileEndsList = [ castle, road, field, field ];
				this.maxCount = 4;
				break;
			case ETileTipe.CastleWallJunction:
				this.tileEndsList = [ castle, road, road, road ];
				this.maxCount = 4;
				break;
			case ETileTipe.CastleWallRoad:
				this.tileEndsList = [ castle, road, field, road ];
				this.maxCount = 4;
				break;
			case ETileTipe.Monastery:
				this.tileEndsList = [ field, field, field, field ];
				this.maxCount = 2;
				break;
			case ETileTipe.MonasteryRoad:
				this.tileEndsList = [ field, field, road, field ];
				this.maxCount = 4;
				break;
			case ETileTipe.Road:
				this.tileEndsList = [ field, road, road, field ];
				this.maxCount = 4;
				break;
			case ETileTipe.RoadCrossLarge:
				this.tileEndsList = [ road,  road,  road,  road ];
				this.maxCount = 2;
				break;
			case ETileTipe.RoadCrossSmall:
				this.tileEndsList = [ field,  road,  road,  road ];
				this.maxCount = 4;
				break;
			case ETileTipe.RoadCurve:
				this.tileEndsList = [ field,  field,  road,  road ];
				this.maxCount = 4;
				break;
			case ETileTipe.RoadEnd:
				this.tileEndsList = [ field,  field,  road,  field ];
				this.maxCount = 4;
				break;
			case ETileTipe.RoadJunctionLarge:
				this.tileEndsList = [ road,  road,  road,  road ];
				this.maxCount = 2;
				break;
			case ETileTipe.RoadJunctionSmall:
				this.tileEndsList = [ field,  road,  road,  road ];
				this.maxCount = 4;
				break;
		}

	}

}