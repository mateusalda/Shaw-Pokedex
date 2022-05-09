import { useEffect, useState } from "react"


export const useColorType = () => {
    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')
    const [colors, setColors] = useState([])

    useEffect(() => {
        setColors([color1, color2])
    }, [color1, color2])

    const getTypes = (types) => {
        switch (types && types[0].type.name) {
            case 'normal':
                setColor1('#ffe5f5')
                setColor2('#ffe5f5')
                break
            case 'fighting':
                setColor1('#ce6b3b')
                setColor2('#ce6b3b')
                break
            case 'flying':
                setColor1('#d6fffd')
                setColor2('#d6fffd')
                break
            case 'poison':
                setColor1('#8420e1')
                setColor2('#8420e1')
                break
            case 'ground':
                setColor1('#7a4a27')
                setColor2('#7a4a27')
                break
            case 'rock':
                setColor1('#535353')
                setColor2('#535353')
                break
            case 'bug':
                setColor1('#a2b46c')
                setColor2('#a2b46c')
                break
            case 'ghost':
                setColor1('#5c4b9e')
                setColor2('#5c4b9e')
                break
            case 'steel':
                setColor1('#b1b1b1')
                setColor2('#b1b1b1')
                break
            case 'fire':
                setColor1('#ff4926')
                setColor2('#ff4926')
                break
            case 'water':
                setColor1('#2671ff')
                setColor2('#2671ff')
                break
            case 'grass':
                setColor1('#72ff26')
                setColor2('#72ff26')
                break
            case 'electric':
                setColor1('#fff926')
                setColor2('#fff926')
                break
            case 'psychic':
                setColor1('#ff3cd0')
                setColor2('#ff3cd0')
                break
            case 'ice':
                setColor1('#4bffe0')
                setColor2('#4bffe0')
                break
            case 'dragon':
                setColor1('#4b529d')
                setColor2('#4b529d')
                break
            case 'dark':
                setColor1('#282828')
                setColor2('#282828')
                break
            case 'fairy':
                setColor1('#ffaadd')
                setColor2('#ffaadd')
                break
            default:
                setColor1('#ffffff')
                setColor2('#ffffff')
                break
        }
        if (types && types.length > 1){
            setColor2(color1)
            switch (types && types[1].type.name) {
                case 'normal':
                    setColor2('#ffe5f5')
                    break
                case 'fighting':
                    setColor2('#ce6b3b')
                    break
                case 'flying':
                    setColor2('#d6fffd')
                    break
                case 'poison':
                    setColor2('#8420e1')
                    break
                case 'ground':
                    setColor2('#7a4a27')
                    break
                case 'rock':
                    setColor2('#535353')
                    break
                case 'bug':
                    setColor2('#a2b46c')
                    break
                case 'ghost':
                    setColor2('#5c4b9e')
                    break
                case 'steel':
                    setColor2('#b1b1b1')
                    break
                case 'fire':
                    setColor2('#ff4926')
                    break
                case 'water':
                    setColor2('#2671ff')
                    break
                case 'grass':
                    setColor2('#72ff26')
                    break
                case 'electric':
                    setColor2('#fff926')
                    break
                case 'psychic':
                    setColor2('#ff3cd0')
                    break
                case 'ice':
                    setColor2('#4bffe0')
                    break
                case 'dragon':
                    setColor2('#4b529d')
                    break
                case 'dark':
                    setColor2('#282828')
                    break
                case 'fairy':
                    setColor2('#ffaadd')
                    break
                default:
                    setColor2('#ffffff')
                    break
            }
        }
    }

    return [color1, color2, colors, getTypes]
}