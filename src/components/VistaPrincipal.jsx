import React from 'react';
import {Header} from './Header'
import {Filter} from "./Filter";
import {Properties} from "./Properties";
import {Footer} from "./Footer";

export const VistaPrincipal = (props) => {
    return (
        <div className="App">
            <Header></Header>

            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">Category products</h2>
                    <nav>
                        <ol className="breadcrumb text-white">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Best category</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Great articles</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <Filter></Filter>
                        <main className="col-md-9">
                            <header className="border-bottom mb-4 pb-3">
                                <div className="form-inline">
                                    <span className="mr-md-auto">32 Items found </span>
                                    <select className="mr-2 form-control">
                                        <option>Latest items</option>
                                        <option>Trending</option>
                                        <option>Most Popular</option>
                                        <option>Cheapest</option>
                                    </select>
                                    <div className="btn-group">
                                        <a href="#" className="btn btn-outline-secondary active" data-toggle="tooltip"
                                           title="List view">
                                            <i className="fa fa-bars"></i></a>
                                        <a href="#" className="btn  btn-outline-secondary" data-toggle="tooltip"
                                           title="Grid view">
                                            <i className="fa fa-th"></i></a>
                                    </div>
                                </div>
                            </header>
                            <Properties/>
                            <nav className="mt-4" aria-label="Page navigation sample">
                                <ul className="pagination">
                                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </main>
                    </div>
                </div>
            </section>

            <Footer/>

        </div>
    )
}

