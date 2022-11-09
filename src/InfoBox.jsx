import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'


function InfoBox({ title, Case, total, menu }) {
    return (
        <Card>
            <CardContent >
                {/* titlei.e  coronavirus case*/}
                <Typography color="textSecondary"> {title} </Typography>
                {/* 124k number of cases */}
                <h2 className="infobox_cases">{Case}</h2>
                {/* 1.2m total */}
                <Typography className="infobox_total" color="textSecondary">Total<br /> {total}</Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox;
