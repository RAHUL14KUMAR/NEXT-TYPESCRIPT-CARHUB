import {MouseEventHandler} from "react"
export interface CustomButtonProps{
    title:string,
    containerStyles?:string
    textStyles?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>
    btnType?:"button"|"submit"
    rightIcon?:string,
    isDisabled?:boolean
}

export interface SearchManuFacturerProps{
    manufacturer:string;
    setManuFacturer:(manufacturer:string)=>void
}

export interface CarProps{
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}

export interface filterProps{
    manufacturer?:string,
    year?:number,
    fuel?:string,
    limit?:number,
    model?:string
}

export interface HomeProps {
    searchParams: filterProps;
}