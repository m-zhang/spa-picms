import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Welcome extends PureComponent {
    render () {
        return (
            <div className="inner cover">
                <h1 className="cover-heading">hey buddy。</h1>
                <p className="lead">这个算是个人REACT的一个spa项目应用前后端分离，采用restful api设计、webpack自动化构建，前端路由react-router管理。感谢Samuele Zaza:
                    <a href="https://scotch.io/tutorials/retrogames-library-with-node-react-and-redux-1-server-api-and-react-frontend" target="_blank">https://scotch.io/tutorials/retrogames-library-with-node-react-and-redux-1-server-api-and-react-frontend</a>
                </p>
                <dl className="key-word">
                    <dt>关键字</dt>
                    <dd><span>nodejs</span><span>es6</span><span>babel</span><span>webpack</span><span>React</span><span>react-router</span>
                        <span>yarn</span><span>react-hot-loader</span>
                    </dd>
                </dl>
                <p className="lead">
                    <Link className="btn btn-lg" to="/pictures">浏览相册</Link>
                </p>
            </div>
        );
    }
}