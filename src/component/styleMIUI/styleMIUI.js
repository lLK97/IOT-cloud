export const content = {
    display: 'flex'
}
export const textDropdown = {
    fontSize: '13px',
    margin: 'auto',
    padding: '5px 12px',
}
export const buttonDefault = {
    textAlign: 'center',
    backgroundColor: 'var(--primary-light-blue)',
    color: 'var(--primary-white)',
    margin: 'auto',
    padding: '0',
    width: '90%',
    fontSize: '13px',
    borderRadius: '20px',
    '&:hover': {
        backgroundColor: 'var(--primary-light-blue)',
        opacity: '0.8'
    },
}
export const iconUserHead = {
    backgroundColor: 'hsl(0, 0%, 90%)',
    color: 'hsl(203deg 30% 80%)',
    margin: '0 10px',
    borderRadius: '50%'
}
export const iconLogin = {
    margin: '0 10px',
    borderRadius: '50%',
    color: 'white',
    backgroundColor: 'tranparent',
    fontSize: '35px'
}
export const listVertical = {
    float: 'left',
    p: '12px 40px 12px 0',
    fontSize: '17px'
}
export const listVerticalSmall = {
    float: 'left',
    p: '0 6px 0 0',
    fontSize: '13px',
    m: '0 6px 0 0'
}
export const textTitle = {
    color: 'var(--primary-white)',
    textAlign: 'center',
    fontWeight: '400'
}


// Login Image
export const formSizeLogin = {
    minHeight: '500px',
    textAlign: 'center',
    marginTop: '50px',
}
export const distantTextField = {
    m: '6px auto'
}
export const backgroundlogin = {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: 'calc(100vh - 195px) !important',
    alignItems: 'center',
    width: '100%',
    m: 0,
    '@media all and (max-width: 900px)': {
        height: 'auto !important',
        paddingBottom: '50vh',
        overflowY: 'scroll'
    }
}
export const loginPageBg = {
    backgroundSize: 'cover',
    backgroundImage: 'url(https://i.imgur.com/mbkXAgu.png)'

}
export const backgroundTextLogin = {
    backgroundImage: 'url(https://i.imgur.com/F77ljAM.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    padding: '220px 150px !important',
    '@media all and (max-width: 900px)': {
        padding: '20px !important',
        'h2': {
            fontSize: '32px !important',
        }
    }
}
export const formLogin = {
    width: '380px',
    height: '420px',
    p: '5px !important',
    boxSizing: 'border-box',
    backgroundColor: 'var(--primary-white)',
    margin: 'auto',
    borderRadius: '10px !important',
    '@media all and (max-width: 415px)': {
        width: 'calc(100vw - 20px)'
    }
}
export const titleLogin = {
    textAlign: 'left',
    color: 'var(--primary-dark-blue)',
    fontSize: '22px',
    fontWeight: '700',
    p: '10px 0 20px'
}
export const labelLogin = {
    textAlign: 'left',
    height: '32px',
    fontSize: '15px',
    fontWeight: '300',
    'span': {
        color: 'red'
    }
}
export const textField = {
    marginBottom: '24px',
    '>input': {
        height: '22px !important',
        m: '4px 11px  !important',
        p: 0
    },
    '>div': {
       
        '>input': {
            border: '1px solid #d9d9d9',
            height: '22px',
            p: '4px 11px', fontSize: '14px',
        }
    }

}
export const noteLogin = {
    textAlign: 'right',
    color: 'var(--primary-light-blue)',
    cursor: 'pointer',
    marginBottom: '20px',
    fontSize: '13px',
    fontWeight: '300',
    '&:hover': {
        color: 'var(--primary-dark-blue)',
    }
}
export const buttonLogin = {
    backgroundColor: 'var(--primary-light-blue)',
    color: 'white',
    py: '8px',
    width: '100%',
    textTransform: 'none',
    fontSize: '16px !important',
    '&:hover': {
        backgroundColor: 'var(--primary-dark-blue)',
    }
}
// End Login

// Register
export const registerPage = {
    backgroundSize: 'contain',
    backgroundImage: 'url(https://i.imgur.com/rEL1gn3.png)'
}

export const formRegister = {
    width: '600px',
    height: 'auto',
    margin: '40px auto',
    boxSizing: 'border-box',
    transform: 'translateX(-25px)',
    '>li': {
        justifyContent: 'flex-start'
    }
}
export const textFieldHorizontal = {
    marginLeft: '24px',
    paddingRight: '24px',
    width: '450px',
    '>div': {
        '>input': {
            height: '22px',
            p: '4px 11px', fontSize: '14px',
            border: '1px solid #d9d9d9',
            outlined: ''
        }
    }
}

export const selectRegister = {

    '>div': { p: '4px 11px', fontSize: '14px !important' }
}
export const agreeTerm = {
    fontWeight: 'bold', fontSize: '14px',
    m: '14px 0 14px 32px'

}
export const buttonNext = {
    backgroundColor: '#1890ff',
    color: 'white',
    py: '8px',
    width: '100%',
    textTransform: 'none',
    fontSize: '13px !important',
    height: '35px',
    m: '5px auto',
    '&:hover': {
        backgroundColor: 'var(--primary-dark-blue)',
    }

}
export const buttonResend = {
    width: '100px',
    height: '33px',
    fontSize: '12px',
    m: '0px auto'
}
export const buttonSignInNow = {
    width: '140px',
    height: '35px',
    backgroundColor: 'var(--primary-light-blue)',
    color: 'white',
    py: '8px',
    textTransform: 'none',
    fontSize: '13px !important',
    m: '5px auto',
    '&:hover': {
        backgroundColor: 'var(--primary-dark-blue)',
    }

}
// End Register
// Finish
export const checkIcon = {
    top: '8px',
    position: 'relative',
    fontSize: '28px',
    color: 'green'
}
// End Finish


// SIDEBAR
export const sidebar = {
    width: '200px',
    height: '100vh',
    p: 0,
    width: '100%',
    '>a': {
        '>li:hover': {
            backgroundColor: 'var(--color-hover)',
            color: 'var(--primary-dark-blue)',
            cursor: 'pointer'
        }
    }

}
export const itemSidebar = {
    p: '0 16px',
    height: '52px',
    '>svg': {
        fontSize: '22px'
    },
    '>div': {
        '>span': {
            fontWeight: '300'
        }

    }

}
// END SIDEBAR

// MAIN CONTENT
export const mainContent = {
    p: '10px',
    backgroundColor: 'var(--bgColor-content)',
    width: 'calc(100vw - 200px)',
    maxWidth: '100% !important',
    flex: 'auto !important',
    paddingRight: '24px',
    // overflowY: 'scroll'
}
// END MAIN CONTENT


//MODAL DIALOG
export const buttonDialog = {
    boxSizing: 'border-box',
    width: '55px',
    height: '80px',
    fontSize: '16px',
    padding: '4px 15p',
    border: '0'
}


///INPUT ERROR 
export const inputError = {
    marginLeft: '24px',
    '>div': {
        width: '97%',
        '>input': {
            border: '1px solid var(--primary-waring)',
            p: '4px 11px', fontSize: '14px',
            width: '90%'
        }
    }
}

//TAB PAGE ME
export const inputBasicInfor = {
    width: '450px',
    marginLeft: 24,
    marginBottom: 8
}
//TAB BUTTON PAGE DASHBOARD
export const buttonDashboard = {
    textAlign: 'center',
    backgroundColor: 'var(--primary-light-blue)',
    color: 'var(--primary-white)',
    height: '36px',
    width: '90px',
    marginLeft: 'auto',
    '&:hover': {
        backgroundColor: 'var(--primary-light-blue)',
        opacity: '0.8'
    },
   
}