import {getGif} from "../../helpers/getGifs";

describe('Tests in getGifs helper', () => {
    test('Should get 10 objects', async () => {
        const gifs = await getGif('Testing')
        expect(gifs.length).toBe( 10 )
    })

    test('Shouldn\'t get objects', async () => {
        const gifs = await getGif('')
        expect(gifs.length).toBe( 0 )
    })
})
