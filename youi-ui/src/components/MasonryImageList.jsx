import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Button } from '@mui/material';
import UserAndAvatar from "../components/UserAndAvatar";

export default function MasonryImageList() {
    const [isActive, setIsActive] = useState(true);
    return (
        <Box sx={{ width: "95vw" }}>
            <ImageList variant="masonry" gap={20}
                sx={{
                    width: "100%",
                    overflowY: "hidden",
                    columnCount: {
                        xs: '1 !important',
                        sm: '2 !important',
                        md: '3 !important',
                        lg: '5 !important',
                        xl: '7 !important',
                        xxl: '9 !important',
                        xxxl: '12 !important',
                    },
                }}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                cursor: "pointer",
                                borderRadius: 50,
                                position: "relative"
                            }}
                        />
                        <ImageListItemBar
                            sx={{
                                background: 'transparent',
                                color: (theme) => theme.palette.primary.main,
                                px: 1
                            }}
                            title={<UserAndAvatar></UserAndAvatar>}
                            position="below"
                            actionIcon={
                                <Button
                                    onClick={() => setIsActive(!isActive)}
                                    sx={{
                                        background: (theme) => theme.palette.action.disabled,
                                        width: "fit-content",
                                        textAlign: "center",
                                        borderRadius: 2,
                                        position: "absolute",
                                        bottom: 55,
                                        right: 15,
                                    }}
                                > {isActive ? "save" : "delete"}
                                </Button>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box >
    );
}

const itemData = [
    {
        img: 'https://i.pinimg.com/564x/aa/82/02/aa82021347e8729119e4ca8737e0ba34.jpg',
        title: 'Bed',
        author: 'swabdesign',
    },
    {
        img: 'https://i.pinimg.com/564x/31/67/71/3167718e4550f12db3b46ecd48453a73.jpg',
        title: 'Books',
        author: 'Pavel Nekoranec',
    },
    {
        img: 'https://i.pinimg.com/564x/9f/56/82/9f5682305fb3ef3ccbe884a86e389eb9.jpg',
        title: 'Sink',
        author: 'Charles Deluvio',
    },
    {
        img: 'https://i.pinimg.com/564x/be/d0/ec/bed0ec922bb1599efb05b6ea14ef7db0.jpg',
        title: 'Kitchen',
        author: 'Christian Mackie',
    },
    {
        img: 'https://i.pinimg.com/564x/f4/c9/78/f4c97841a22f250979e2eb4abbf166e2.jpg',
        title: 'Blinds',
        author: 'Darren Richardson',
    },
    {
        img: 'https://i.pinimg.com/564x/e2/01/b0/e201b0e628109626d6c8ab00eebcf335.jpg',
        title: 'Chairs',
        author: 'Taylor Simpson',
    },
    {
        img: 'https://i.pinimg.com/564x/ed/7f/89/ed7f89dcbfceed202d54de15f9c3ffa4.jpg',
        title: 'Laptop',
        author: 'Ben Kolde',
    },
    {
        img: 'https://i.pinimg.com/564x/b1/f1/a2/b1f1a26d319a0285a3afb7545a0a7f55.jpg',
        title: 'Doors',
        author: 'Philipp Berndt',
    },
    {
        img: 'https://i.pinimg.com/564x/4b/08/13/4b08138192e2244615b4eba7e5f131ed.jpg',
        title: 'Coffee',
        author: 'Jen P.',
    },
    {
        img: 'https://i.pinimg.com/564x/cf/aa/38/cfaa38612f06a3f260bd1756c23305e0.jpg',
        title: 'Storage',
        author: 'Douglas Sheppard',
    },
    {
        img: 'https://i.pinimg.com/564x/1a/9a/0b/1a9a0bb22013b2ae10f3b6d5c4b4b27e.jpg',
        title: 'Candle',
        author: 'Fi Bell',
    },
    {
        img: 'https://i.pinimg.com/564x/dd/a8/83/dda88372520506dd114b06ab8a18778b.jpg',
        title: 'Coffee table',
        author: 'Hutomo Abrianto',
    },
    {
        img: 'https://i.pinimg.com/564x/a7/a0/0f/a7a00f56cbe7ebde648018459fed6428.jpg',
        title: 'Doors',
        author: 'Philipp Berndt',
    },
    {
        img: 'https://i.pinimg.com/564x/52/d4/8f/52d48f85e62a1da921e2e6aed1998b12.jpg',
        title: 'Coffee',
        author: 'Jen P.',
    },
    {
        img: 'https://i.pinimg.com/564x/93/f6/4f/93f64f6193eb1e055ead9dc859db94f8.jpg',
        title: 'Storage',
        author: 'Douglas Sheppard',
    },
    {
        img: 'https://i.pinimg.com/564x/db/68/0b/db680b7eeee8be7f77812fc9e7e9e0e4.jpg',
        title: 'Candle',
        author: 'Fi Bell',
    },
    {
        img: 'https://i.pinimg.com/564x/9f/56/82/9f5682305fb3ef3ccbe884a86e389eb9.jpg',
        title: 'Coffee table',
        author: 'Hutomo Abrianto',
    },
    {
        img: 'https://i.pinimg.com/564x/db/68/0b/db680b7eeee8be7f77812fc9e7e9e0e4.jpg',
        title: 'Candle',
        author: 'Fi Bell',
    },
    {
        img: 'https://i.pinimg.com/564x/63/e4/a5/63e4a5c25783e57eb55084f6d4f3582f.jpg',
        title: 'Coffee table',
        author: 'Hutomo Abrianto',
    },
];