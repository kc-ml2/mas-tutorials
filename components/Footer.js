import Image from 'next/image'
import logo from '../public/Footer/logo.png'
import facebook from '../public/Footer/facebook.png'
import insta from '../public/Footer/insta.png'
import github from '../public/Footer/github.png'
import {
    Row,
    Col,
} from 'reactstrap';


export default function Footer() {

    return (
        <footer>
            <Row>
                <Col md="4">
                    <Image src={logo} alt="logo" width="224" height="24.03" priority={true}></Image>
                </Col>
                <Col md="4">
                    <div>
                        © ML2.All rights reserved.
                    </div>
                </Col>
                <Col md="1">
                </Col>
                <Col md="3">
                    <div >
                        <a href="https://www.facebook.com/KCML2/" target="_blank" rel="noreferrer">
                            <Image src={facebook} alt="logo" width="24" height="24" priority={true}></Image>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.instagram.com/ml2_machinelearninglab/" target="_blank" rel="noreferrer">
                            <Image src={insta} alt="logo" width="24" height="24" priority={true}></Image>
                        </a>
                    </div>

                    <div>
                        <a href="https://github.com/kc-ml2" target="_blank" rel="noreferrer">
                            <Image src={github} alt="logo" width="24" height="24" priority={true}></Image>
                        </a>
                    </div>
                </Col>
                <Col>
                </Col>
            </Row>
        </footer >
    )
}