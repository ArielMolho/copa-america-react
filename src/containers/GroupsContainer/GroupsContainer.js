import React, {useState, useEffect} from 'react';
import Groups from '../../components/Groups/Groups';

const { getZones } = require('../../services/postService');

export default function GroupsContainer() {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        getZones()
        .then(res => {
            for (let g = 0; g < res.dataGrupos.length; g++) {
                let group = res.dataGrupos[g];
                group.paises = [];
                for (let c = 0; c < res.dataPaises.length; c++) {
                    let country = res.dataPaises[c];
                    if (country.grupoid === group.id) {
                        group.paises.push(country)
                    }
                }
            }
            setGroups(res.dataGrupos)
        })
    }, []);

    return (
        <div>
            { groups.map(group => {
                return <Groups key={Math.random().toString(36).substr(2, 9)} group={group} />;
            })}
        </div>
    )
}