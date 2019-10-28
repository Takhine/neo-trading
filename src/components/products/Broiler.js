import React from 'react';
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';
const Broiler = () => {
    const tables = [
        {
            id: 1,
            heading:'Nutritional Values',
            header: [
                {
                    id: 1,
                    title: 'Specifications'
                },
                {
                    id: 2,
                    title: 'Pre Starter'
                },
                {
                    id: 3,
                    title: 'Starter'
                },
                {
                    id: 4,
                    title: 'Finisher'
                },
            ],
            rows: [
                {
                    id: 1,
                    data: [
                        {id:1,data:'Metabolisable energy (min)'},
                        {id:2,data:'2900 kcal/kg'},
                        {id:3,data:'2900 kcal/kg'},
                        {id:4,data:'30000 kcal/kg'}
                    ]
                },
                {
                    id: 2,
                    data: [
                        {id:1,data:'Protein (min)'},
                        {id:2,data:'38%'},
                        {id:3,data:'34%'},
                        {id:4,data:'36%'}
                    ]
                },
                {
                    id: 3,
                    data: [
                        {id:1,data:'DL-Methionine (min)'},
                        {id:2,data:'25 gm/kg'},
                        {id:3,data:'22 gm/kg'},
                        {id:4,data:'21 gm/kg'}
                    ]
                },
                {
                    id: 4,
                    data: [
                        {id:1,data:'L-Lysine (min)'},
                        {id:2,data:'33 gm/kg'},
                        {id:3,data:'29 gm/kg'},
                        {id:4,data:'34 gm/kg'}
                    ]
                },
            ]
        },
        {
            id: 2,
            heading:'Suggested Complete Feed Formula',
            header: [
                {
                    id: 1,
                    title: 'Raw Materials'
                },
                {
                    id: 2,
                    title: 'Pre Starter'
                },
                {
                    id: 3,
                    title: 'Starter'
                },
                {
                    id: 4,
                    title: 'Finisher'
                },
            ],
            rows: [
                {
                    id: 1,
                    data: [
                        {id:1,data:'Maize'},
                        {id:2,data:'620 kgs'},
                        {id:3,data:'630 kgs'},
                        {id:4,data:'700 kgs'}
                    ]
                },
                {
                    id: 2,
                    data: [
                        {id:1,data:'Soya'},
                        {id:2,data:'280 kgs'},
                        {id:3,data:'270 kgs'},
                        {id:4,data:'200 kgs'}
                    ]
                },
                {
                    id: 3,
                    data: [
                        {id:1,data:'Neomax'},
                        {id:2,data:'100 kgs'},
                        {id:3,data:'100 kgs'},
                        {id:4,data:'100 kgs'}
                    ]
                },
                {
                    id: 4,
                    data: [
                        {id:1,data:'Total'},
                        {id:2,data:'1000 kgs'},
                        {id:3,data:'1000 kgs'},
                        {id:4,data:'1000 kgs'}
                    ]
                },
            ]
        }
    ]
    return (
        <div className="broiler container">
            <h3 className="main-heading">10% Broiler Concentrate</h3>
            <p>The complete planned food for your poultry, <b>Neo Feeds</b>, 10% concentrate for broilers. <b>NEOMAX</b>, has a unique blend of amino acids, energy sources, trace minerals, growth promoters, salt, vitamins, coccidiostats and anti oxidants.
            Formulated by experts who have served the poultry industry for over 30 years</p>
            <Grid container spacing={2}>
                {tables.map((table) => {
                    return (
                        <Grid key={table.id} item xs={12} md={6}>
                            <h4 className="table-heading">{table.heading}</h4>
                            <Paper>
                                <Table className="table" size="small" aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {table.header.map((header) => {
                                                return (
                                                    <TableCell key={header.id}>{header.title}</TableCell>
                                                )
                                            })
                                            }
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {table.rows.map((row) => {
                                            return (
                                                <TableRow hover key={row.id}>
                                                    {row.data.map((data) => {
                                                        return (
                                                            <TableCell key={data.id} align="left">
                                                                {data.data}
                                                            </TableCell>
                                                        )
                                                    })
                                                    }
                                                </TableRow>
                                            )
                                        })
                                        }
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>
                    )
                })

                }
            </Grid>
            <p className="note">If oil has to be added then add 5 kg oil in Pre Starter, 10 kg oil in Starter and 20 kg oil in Finisher. Reduce the quantity of maize accordingly. <br/> Add toxin binder if required.</p>
        </div>
    )
}

export default Broiler;