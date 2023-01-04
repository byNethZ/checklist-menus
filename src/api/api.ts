import { LinkModel } from "../models/link.interface";
import { global } from "./global";

export default class Api {

    public getData = async (id: number | string) => {
        try {
            const response = await fetch(`${global.urlAPI}/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return new Error('Algo salió mal')
        }

        
    }

    public postData = async (id: number, link: LinkModel) => {
        try {
            const response = await fetch(`${global.urlAPI}/${id}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(link)
            });
            const result = await response.json();
            return result;
        } catch (error) {
            return new Error('Something goes wrong')
            
        }
    }
}