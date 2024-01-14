import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en el helper getGifs', () => { 
    test('debe de retornar un arreglo de gifs', async() => { 
        const gifs = await getGifs('one punch')
        //que el arreglo tenga por lo menos un elemento
        expect(gifs.length).toBeGreaterThan(0)
        expect( gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any( String)
        })
     })
 })