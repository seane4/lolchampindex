import "./abilitycontainer.scss"
import React, { useState, useEffect } from 'react';


const AbilityContainer = ({ version, champ}) => {
    const [spells, setSpells] = useState([]);
    const [passive, setPassive] = useState({
        name: "",
        description: "",
        image: {
            full: "",
        }
    });
    // console.log(championId)

    //champion passives
    useEffect(() => {
        async function fetchPassive() {
            const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/championFull.json`);
            const data = await response.json();
            setPassive(data.data[champ].passive);
            setAbilityFocus({
                name: data.data[champ].passive.name,
                description: data.data[champ].passive.description,
                image: {
                    full: data.data[champ].passive.image.full,
                },
                location: "Passive - ", 
            })
            {/*When we fetch a new passive, for a new champion, we set that as the default focus ability to show the user */
            /*setAbilityFocus is deconstructed because location would override initial location "Passive - " that I wanted to set
            if I just did setAbilityFocus(data.data[champ].passive) */}
        }
        fetchPassive();


    }, [champ]);
    
    
    //This gets us our spells data to map over later
    useEffect(() => {
        async function fetchAbilities() {
            const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${champ}.json`);
            const data = await response.json();
            setSpells(data.data[champ].spells);
        }
        fetchAbilities();
    }, [champ]);

    //Simply putting location as passive would be overwritten during fetchPassive, so we had to destructure it our call -> See line 22 for reference
    //This allows us to set which ability the user sees, set to passive by default -> see fetchPassive notes
    //When a passive is active, we're passed passive info, and the same goes for QWER abilities, check ln 58 and 62 onClick for a better understanding
    const [abilityFocus, setAbilityFocus] = useState({
        name: passive.name,
        description: passive.description,
        image: {
            full: passive.image.full,
        },
        location: "Passive - ",
    })

    //because the json data doesnt tell us which ability is which, but I want to show this, I had to make a simple identifier that labels the ability based on array position
    //for example, QWER is an array, identifiable as 1-4 because I made passive (P) always location zero
    const handleAbilityFocus = (ability, index) => {

        let locationProxy = "";

        switch(index) {
            case 0:
            locationProxy = "Passive - ";
            break;
            case 1:
            locationProxy = "Q - ";
            break;
            case 2:
            locationProxy = "W - ";
            break;
            case 3:
            locationProxy = "E - ";
            break;
            case 4:
            locationProxy = "R - ";
            break;
            default:
            break;
            /// extra
        }

        setAbilityFocus({
            name: ability.name,
            description: ability.description,
            image: {
                full: ability.image.full,
            },
            location: locationProxy,
        })
    }

    // console.log(abilityFocus.location)

    //onClick, handleability focus tells us which ability icon is selected, and in doing so we append the ability position to the string abilityFocus.name
      return (
        <div className="abilityInfo">
            <div className="abilitiesContainer">
                <div>
                    <img onClick={e => handleAbilityFocus(passive, 0)} className={abilityFocus.image.full === passive.image.full ? "Active" : "Ability"} src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${passive.image.full}`} alt="" />
                </div>
                {spells && spells.map((spell, index) => (
                <div key={spell.id}>
                    <img onClick={e => handleAbilityFocus(spell, index + 1)} className={abilityFocus.image.full === spell.image.full ? "Active" : "Ability"} src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`} alt={spell.name} />
                </div>
            ))  }
            </div>
            {/*The replaceAll method removes any description JSON text like hexcodes or styling, present on champs like Bard and Braum */}
            <div className="passiveText">
              <div className="descriptionContainer">{abilityFocus.location}{abilityFocus.name}</div>
              <div className="descriptionBody">{abilityFocus.description.replaceAll(/<(.*?)>/g, '')}</div>
            </div>
        </div>
        )
 }

export default AbilityContainer

