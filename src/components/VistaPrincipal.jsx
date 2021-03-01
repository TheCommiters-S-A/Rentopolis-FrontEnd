import React from 'react';
import {Filter} from "./Filter";

export const VistaPrincipal = (props) => {
    return (
        <div className="App">
            <header className="section-header">
                <section className="header-main border-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-4">
                                <a href="#" className="brand-wrap">
                                    Company Name
                                </a>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <form action="#" className="search">
                                    <div className="input-group w-100">
                                        <input type="text" className="form-control" placeholder="Search"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="widgets-wrap float-md-right">
                                    <div className="widget-header  mr-3">
                                        <a href="#" className="icon icon-sm rounded-circle border"><i
                                            className="fa fa-shopping-cart"></i></a>
                                        <span className="badge badge-pill badge-danger notify">0</span>
                                    </div>
                                    <div className="widget-header icontext">
                                        <a href="#" className="icon icon-sm rounded-circle border"><i
                                            className="fa fa-user"></i></a>
                                        <div className="text">
                                            <span className="text-muted">Welcome!</span>
                                            <div>
                                                <a href="#">Sign in</a> |
                                                <a href="#"> Register</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

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
                            <article className="card card-product-list">
                                <div className="row no-gutters">
                                    <aside className="col-md-3">
                                        <a href="#" className="img-wrap">
                                            <span className="badge badge-danger"> NEW </span>
                                            <img src="assets/images/items/3.jpg"/>
                                        </a>
                                    </aside>
                                    <div className="col-md-6">
                                        <div className="info-main">
                                            <a href="#" className="h5 title"> Great product name goes here </a>
                                            <div className="rating-wrap mb-3">
                                                <ul className="rating-stars">
                                                    <li className="stars-active w-80">
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                </ul>
                                                <div className="label-rating">7/10</div>
                                            </div>

                                            <p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing
                                                elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi
                                                enim ad minim veniam </p>
                                        </div>
                                    </div>
                                    <aside className="col-sm-3">
                                        <div className="info-aside">
                                            <div className="price-wrap">
                                                <span className="price h5"> $140 </span>
                                                <del className="price-old"> $198</del>
                                            </div>
                                            <p className="text-success">Free shipping</p>
                                            <br/>
                                            <p>
                                                <a href="#" className="btn btn-primary btn-block"> Details </a>
                                                <a href="#" className="btn btn-light btn-block"><i
                                                    className="fa fa-heart"></i>
                                                    <span className="text">Add to wishlist</span>
                                                </a>
                                            </p>
                                        </div>
                                    </aside>
                                </div>
                            </article>
                            <article className="card card-product-list">
                                <div className="row no-gutters">
                                    <aside className="col-md-3">
                                        <a href="#" className="img-wrap"><img src="assets/images/items/4.jpg"/></a>
                                    </aside>
                                    <div className="col-md-6">
                                        <div className="info-main">
                                            <a href="#" className="h5 title"> Great product name goes here </a>
                                            <div className="rating-wrap mb-3">
                                                <ul className="rating-stars">
                                                    <li className="stars-active w-80">
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                </ul>
                                                <div className="label-rating">7/10</div>
                                            </div>

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum
                                                dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim
                                                veniam </p>
                                        </div>
                                    </div>
                                    <aside className="col-sm-3">
                                        <div className="info-aside">
                                            <div className="price-wrap">
                                                <span className="price h5"> $56 </span>
                                                <del className="price-old"> $85</del>
                                            </div>
                                            <p className="text-success">Free shipping</p>
                                            <br/>
                                            <p>
                                                <a href="#" className="btn btn-primary btn-block"> Details </a>
                                                <a href="#" className="btn btn-light btn-block"><i
                                                    className="fa fa-heart"></i>
                                                    <span className="text">Add to wishlist</span></a>
                                            </p>
                                        </div>
                                    </aside>
                                </div>
                            </article>

                            <article className="card card-product-list">
                                <div className="row no-gutters">
                                    <aside className="col-md-3">
                                        <a href="#" className="img-wrap"><img src="assets/images/items/5.jpg"/></a>
                                    </aside>
                                    <div className="col-md-6">
                                        <div className="info-main">
                                            <a href="#" className="h5 title"> Great product name goes here </a>
                                            <div className="rating-wrap mb-3">
                                                <ul className="rating-stars">
                                                    <li className="stars-active w-80">
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                </ul>
                                                <div className="label-rating">7/10</div>
                                            </div>

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum
                                                dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim
                                                veniam </p>
                                        </div>
                                    </div>
                                    <aside className="col-sm-3">
                                        <div className="info-aside">
                                            <div className="price-wrap">
                                                <span className="price h5"> $56.00 </span>
                                            </div>
                                            <p className="text-success">Free shipping</p>
                                            <br/>
                                            <p>
                                                <a href="#" className="btn btn-primary btn-block"> Details </a>
                                                <a href="#" className="btn btn-light btn-block"><i
                                                    className="fa fa-heart"></i>
                                                    <span className="text">Add to wishlist</span>
                                                </a>
                                            </p>
                                        </div>
                                    </aside>
                                </div>
                            </article>

                            <article className="card card-product-list">
                                <div className="row no-gutters">
                                    <aside className="col-md-3">
                                        <a href="#" className="img-wrap"><img src="assets/images/items/6.jpg"/></a>
                                    </aside>
                                    <div className="col-md-6">
                                        <div className="info-main">
                                            <a href="#" className="h5 title"> Product name can be here </a>
                                            <div className="rating-wrap mb-3">
                                                <ul className="rating-stars">
                                                    <li className="stars-active w-80">
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                </ul>
                                                <div className="label-rating">7/10</div>
                                            </div>

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum
                                                dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim
                                                veniam </p>
                                        </div>
                                    </div>
                                    <aside className="col-sm-3">
                                        <div className="info-aside">
                                            <div className="price-wrap">
                                                <span className="price h5"> $62 </span>
                                            </div>
                                            <p className="text-success">Free shipping</p>
                                            <br/>
                                            <p>
                                                <a href="#" className="btn btn-primary btn-block"> Details </a>
                                                <a href="#" className="btn btn-light btn-block"><i
                                                    className="fa fa-heart"></i>
                                                    <span className="text">Add to wishlist</span>
                                                </a>
                                            </p>
                                        </div>
                                    </aside>
                                </div>
                            </article>
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

            <footer className="section-footer border-top padding-y">
                <div className="container">
                    <p className="float-md-right">
                        &copy; Copyright 2021 All rights reserved
                    </p>
                    <p>
                        <a href="#">Terms and conditions</a>
                    </p>
                </div>
            </footer>


        </div>
    )
}

