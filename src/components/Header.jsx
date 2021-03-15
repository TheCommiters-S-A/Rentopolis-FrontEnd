
import {Buscar} from './Buscar'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const Header = (props) => {
    
    return (
        <section className="header-main border-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-4">
                        <a style={{fontSize: 30}} href="/inicio" className="brand-wrap">
                            Rentopolis
                        </a>
                        <img/>
                    </div>
                    <Buscar></Buscar>

                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="widgets-wrap float-md-right">

                            <div className="widget-header">
                                <a href="#" class="icon icon-sm ">
                                    <AccountCircleIcon style={{fontSize: 40}}/>
                                </a>
                            </div>
                            <div className="widget-header  mr-3">
                                <a href="/" className="icon icon-sm ">
                                    <ExitToAppIcon style={{fontSize: 40}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
