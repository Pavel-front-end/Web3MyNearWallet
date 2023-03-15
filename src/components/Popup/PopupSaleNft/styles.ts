import { Theme } from '@mui/material/styles'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme: Theme) => ({
    popupAuth: {
        position: 'absolute',
        top: '5%',
        bottom: '5%',
        left: '50%',
        zIndex: '1',
        backgroundColor: '#fff',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        minWidth: '50rem',
        overflow: 'auto',

        '& button' : {
            margin: '1rem 0.5rem 1rem',
        }
    },
    btnLink: {
        fontWeight: '700',
        margin: '1rem 0 2rem',
        textDecoration: 'underline',
        cursor: 'pointer'
    },
}))