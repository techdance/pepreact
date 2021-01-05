import React from "react";

export default class DiscussionApp extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-9 mb-4">
          <div className="box box-border-radius box-shadow bg-white block-discussion">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h3 className="box-subhead">
                  <span className="icon-regular icon-comments-alt"></span>{" "}
                  Discussion
                </h3>
                <a href="#0" className="icon-setting icon-box">
                  <i className="fas fa-cog"></i>
                </a>
              </div>
              <div className="box-middle">
                <ul className="nav nav-tabs" id="tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="discussion-tab"
                      data-toggle="tab"
                      href="#discussion"
                      role="tab"
                      aria-controls="discussion"
                      aria-selected="true"
                    >
                      Discussion
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="file-tab"
                      data-toggle="tab"
                      href="#file"
                      role="tab"
                      aria-controls="file"
                      aria-selected="false"
                    >
                      Files
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="resources-tab"
                      data-toggle="tab"
                      href="#resources"
                      role="tab"
                      aria-controls="resources"
                      aria-selected="false"
                    >
                      Resources
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="discussion"
                    role="tabpanel"
                    aria-labelledby="discussion-tab"
                  >
                    <div className="discussion-scroll-vertical">
                      <div className="discussion-1">
                        <div className="item item-flex">
                          <div className="item-img">
                            <div className="person-img">
                              <img src="images/Inez.png" width="58" alt="" />
                              <span className="user-active"></span>
                            </div>
                          </div>
                          <div className="item-text">
                            <div className="person-top">
                              <p>Inez Campos 2019-10-10 12:46 PM</p>
                            </div>
                            <div className="person-bottom person-laguage">
                              <p className="ing hide">
                                Hello Bradley, might I make a suggestion? Would
                                it be feasible to add the application of
                                knowledge of cross-cultural context to the
                                course description? This aids students in the
                                resolution of global ethical dilemmas. The
                                information available would be highly visible
                                and increase awareness.{" "}
                                <a
                                  className="cl-blue link-trans"
                                  href="#0"
                                  data-toggle="tab"
                                >
                                  Original
                                </a>
                              </p>
                              <p className="port">
                                Olá Bradley, posso fazer uma sugestão? Seria
                                possível adicionar a aplicação do conhecimento
                                do contexto transcultural à descrição do curso?
                                Isso ajuda os alunos a resolver dilemas éticos
                                globais. A informação disponível seria altamente
                                visível e aumentaria a conscientização.{" "}
                                <a
                                  className="cl-blue link-orig"
                                  href="#0"
                                  data-toggle="tab"
                                >
                                  Translate
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="discussion-2">
                        <div className="item item-flex item-discuss-1 ">
                          <div className="item-text">
                            <div className="items odd">
                              <div className="person-top">
                                <p>Bradley Dexter 2019-10-10 1:01 PM</p>
                              </div>
                              <div className="person-bottom bg-blue">
                                <p>
                                  Hello Inez, your ideas are very insightful and
                                  timely. We should make changes to increase
                                  student readiness.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="item-img">
                            <div className="person-img">
                              <img src="images/bradley.png" width="58" alt="" />
                            </div>
                          </div>
                        </div>

                        <div className="item item-flex item-discuss-1 ">
                          <div className="item-text">
                            <div className="items even">
                              <div className="person-top">
                                <p>Bradley Dexter 2019-10-10 1:08 PM</p>
                              </div>
                              <div className="person-bottom bg-blue">
                                <p>
                                  Hello Inez, When you have a moment, please
                                  review the updated Course Description based
                                  upon your recommendation. Please let me know
                                  if it reflects your suggestion accurately.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="item-img">
                            <div className="person-img">
                              <img src="images/bradley.png" width="58" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="discussion-1">
                        <div className="item item-flex">
                          <div className="item-img">
                            <div className="person-img">
                              <img src="images/Inez.png" width="58" alt="" />
                              <span className="user-active"></span>
                            </div>
                          </div>
                          <div className="item-text">
                            <div className="person-top">
                              <p>Inez Campos 2019-10-10 1:12 PM</p>
                            </div>
                            <div className="person-bottom person-laguage2">
                              <p className="ing hide">
                                The description is accurate and clear.{" "}
                                <a
                                  className="cl-blue link-trans2"
                                  href="#0"
                                  data-toggle="tab"
                                >
                                  Original
                                </a>
                              </p>
                              <p className="port">
                                A descrição é precisa e clara.{" "}
                                <a
                                  className="cl-blue link-orig2"
                                  href="#0"
                                  data-toggle="tab"
                                >
                                  Translate
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="item item-flex">
                          <div className="item-img">
                            <div className="person-img">
                              <img src="images/Inez.png" width="58" alt="" />
                              <span className="user-active"></span>
                            </div>
                          </div>
                          <div className="item-text">
                            <div className="person-top">
                              <p>Inez Campos 2019-10-10 1:15 PM</p>
                            </div>
                            <div className="person-bottom person-laguage3">
                              <p className="ing hide">
                                I have appended comments and ideas for our
                                discussion tomorrow.{" "}
                                <a
                                  className="cl-blue link-trans3"
                                  href="#0"
                                  data-toggle="tab"
                                >
                                  Original
                                </a>
                              </p>
                              <p className="port">
                                Anexei comentários e idéias para nossa discussão
                                amanhã.{" "}
                                <a
                                  className="cl-blue link-orig3"
                                  href="#0"
                                  data-toggle="tab"
                                >
                                  Translate
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="discussion-2">
                        <div className="item item-flex item-discuss-1 ">
                          <div className="item-text">
                            <div className="items even">
                              <div className="person-top">
                                <p>Bradley Dexter 2019-10-10 1:21 PM</p>
                              </div>
                              <div className="person-bottom bg-blue">
                                <p>I will review in advance.</p>
                              </div>
                            </div>
                          </div>
                          <div className="item-img">
                            <div className="person-img">
                              <img src="images/bradley.png" width="58" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item item-flex input-message mt-4">
                      <div className="item-text">
                        <input
                          type="text"
                          name=""
                          placeholder="Type a new message"
                        />
                      </div>
                      <div className="item-img d-flex ml-1">
                        <a href="#0">
                          <i className="icon-regular fa-smile"></i>
                        </a>
                        <a href="#0">
                          <i className="icon-solid fa-edit"></i>
                        </a>
                        <a href="#0">
                          <i className="icon-solid fa-cloud-upload-alt"></i>
                        </a>
                        <a href="#0">
                          <i className="icon-regular fa-image"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="file"
                    role="tabpanel"
                    aria-labelledby="file-tab"
                  >
                    <div className="top-search d-inline-block mb-3">
                      <div className="box-search box-search-border">
                        <form action="">
                          <input type="text" placeholder="Search" />
                          <button type="submit">
                            <i className="fas fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="tree-folder d-flex">
                      <div className="tree-sidebar">
                        <ul className="mb-4">
                          <li>
                            <a href="#0">
                              <i className="fas fa-folder"></i> Document
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fas fa-folder"></i> Course Resource
                            </a>
                          </li>
                          <li className="active active-white">
                            <a href="#0" className="active-href">
                              <i className="fas fa-folder-open"></i> Course
                              Materials
                            </a>
                            <ul>
                              <li>
                                <i className="fas fa-folder"></i> Course Info
                              </li>
                              <li>
                                <i className="fas fa-folder"></i> Course Design
                              </li>
                              <li>
                                <i className="fas fa-folder"></i> Assessment
                                Design
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fas fa-trash"></i> Recycle Bin
                            </a>
                          </li>
                        </ul>
                        <div className="wrap-tree-button text-center mt-4 mb-3">
                          <a
                            href="#0"
                            className="btn btn-blue btn-w-100 d-inline-block"
                          >
                            File Upload{" "}
                            <i className="fas fa-cloud-upload-alt"></i>
                          </a>
                        </div>
                      </div>
                      <div className="wrap-folder">
                        <div className="row font12">
                          <div className="col-md-4 ac mb-3">
                            <a href="#0">
                              <img
                                src="images/Folder2.png"
                                className="d-block m-auto"
                                alt=""
                              />
                              <span className="font12 color-black">
                                Course Info
                              </span>
                            </a>
                          </div>
                          <div className="col-md-4 ac mb-3">
                            <a href="#0">
                              <img
                                src="images/Folder2.png"
                                className="d-block m-auto"
                                alt=""
                              />
                              <span className="font12 color-black">
                                Course Design
                              </span>
                            </a>
                          </div>
                          <div className="col-md-4 ac mb-3">
                            <a href="#0">
                              <img
                                src="images/Folder2.png"
                                className="d-block m-auto"
                                alt=""
                              />
                              <span className="font12 color-black">
                                Assessment Design
                              </span>
                            </a>
                          </div>
                          <div className="col-md-4 ac mb-3">
                            <a href="#0">
                              <img
                                src="images/Folder2.png"
                                className="d-block m-auto"
                                alt=""
                              />
                              <span className="font12 color-black">
                                Task Design
                              </span>
                            </a>
                          </div>
                          <div className="col-md-4 ac mb-3">
                            <a href="#0">
                              <img
                                src="images/Folder2.png"
                                className="d-block m-auto"
                                alt=""
                              />
                              <span className="font12 color-black">
                                Content Design
                              </span>
                            </a>
                          </div>
                          <div className="col-md-4 ac mb-3">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#pptModal"
                            >
                              <img
                                src="images/PPT.png"
                                className="d-block m-auto"
                                alt=""
                              />
                              <span className="font12 color-black">
                                EMM Course Development.pptx
                              </span>
                            </a>

                            {/* <!-- Modal Badges --> */}
                            <div
                              className="modal fade modalToltip"
                              id="pptModal"
                              tabIndex="-1"
                              role="dialog"
                              aria-labelledby="modalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <div className="p-3">
                                      <div className="toltip-header">
                                        <div className="toltip-close">
                                          <a href="#0" data-dismiss="modal">
                                            <i className="fa fa-times-circle"></i>
                                          </a>
                                        </div>
                                      </div>
                                      <div className="img-resp">
                                        <img
                                          src="images/ScreenPPT.png"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="resources"
                    role="tabpanel"
                    aria-labelledby="resources-tab"
                  >
                    resources
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
