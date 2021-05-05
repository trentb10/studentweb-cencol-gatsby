import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

export default function UofT() {
    return (
        <Layout title="Assignments from University of Toronto">
            <Helmet>
                <title>UofT Assignments - trentb10 on Gatsby</title>
            </Helmet>
            <p>
                Here are some select assignments I have completed from the University 
                of Toronto:
            </p>

            <h2>ENGD94 Stranger than Fiction</h2>
            <Link to="/assignments/uoft/life-after-grad">
                <li><i>Life After Grad</i> (2019) - Term Documentary Project</li>
            </Link>

        </Layout>
    );
}

/**
 * 
 * trentb10 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
 * 
 */