import "./App.scss";
import Header from "./components/Header/Header";
import cross from "./assets/cross.svg";
import Card from "./components/Card/Card";
import classNames from "classnames";
import { useState } from "react";

function App() {
    const [isAddClosed, setIsAddClosed] = useState(false);
    const [spec, setSpec] = useState("");

    return (
        <div className="container">
            <div className="content">
                <div className="textblock">
                    <p className="content_title">Заголовок</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec,
                        <br />
                        <br /> pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium. Integer tincidunt.
                        Cras dapibus. Vivamus <br />
                        <br />
                        elementum semper nisi. Aenean vulputate eleifend tellus.
                        Aenean leo ligula, porttitor eu, consequat vitae,
                        eleifend ac, enim. Aliquam lorem ante, dapibus in,
                        viverra quis, feugiat a, tellus. Phasellus viverra nulla
                        ut metus varius laoreet. Quisque rutrum. Aenean
                        imperdiet. Etiam <br />
                        <br />
                        ultricies nisi vel augue. Curabitur ullamcorper
                        ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
                        tempus, tellus eget condimentum <br />
                        rhoncus, sem quam semper libero,
                        <br />
                        <br /> sit amet adipiscing sem neque sed ipsum. Nam quam
                        nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                        Maecenas nec odio
                        <br /> et ante tincidunt tempus. Donec vitae sapien ut
                        libero venenatis faucibus. Nullam quis ante. Etiam sit
                        <br />
                        amet orci eget eros faucibus tincidunt. Duis leo. Sed
                        fringilla mauris sit amet nibh. Donec sodales sagittis
                        magna. Sed consequat, leo eget bibendum sodales, augue
                        <br />
                        <br />
                        velit cursus nunc, quis gravida magna mi a libero. Fusce
                        vulputate eleifend sapien. Vestibulum purus quam,
                        <br />
                        <br />
                        scelerisque ut, mollis sed, nonummy id, met
                    </p>
                </div>
                <div className={classNames("adsblock", { hide: isAddClosed })}>
                    <img
                        onClick={() => setIsAddClosed(true)}
                        src={cross}
                        alt="крест"
                    />
                    <p className="title">Реклама</p>
                    <p className="text">отдайте ваши деньги</p>
                    <p className="text">отдайте ваши деньги</p>
                </div>
            </div>
            <div className="cards">
                <Card setSpec={setSpec} spec={spec} name="bob" />
                <Card setSpec={setSpec} spec={spec} name="clare" />
                <Card setSpec={setSpec} spec={spec} name="andrew" />
                <Card setSpec={setSpec} spec={spec} name="kyle" />
            </div>
            <p className="spec">
                Текущий спец: {spec === "" ? "*тут никого*" : spec}
            </p>
            <div className="todos">
            </div>
        </div>
    );
}

export default App;
