
import {Buscar} from './Buscar'

export const Header = (props) => {
    return (
        <section className="header-main border-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-4">
                        <a href="#" className="brand-wrap">
                            Rentopolis
                        </a>
                    </div>
                    <Buscar></Buscar>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="widgets-wrap float-md-right">
                            <div className="widget-header  mr-3">
                                <a href="#" class="icon icon-sm rounded-circle border">
                                    <i class="fa fa-shopping-cart"></i>
                                </a>
                                <span className="badge badge-pill badge-danger notify">0</span>
                            </div>
                            <div className="widget-header">
                                <a href="#" class="icon icon-sm rounded-circle border">
                                    <i class="fa fa-user"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
            