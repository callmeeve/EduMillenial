const Header = (props) => {
    return (
        <>
            <div className="row justify-content-start">
                <div className="col-xl-6 lh-lg">
                    <div>
                        <p className="h4">{props.heading}</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-start">
                <div className="lc-block col-sm-10">
                    <div editable="rich">
                        <p className>{props.text}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;