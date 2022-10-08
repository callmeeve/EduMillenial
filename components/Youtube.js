const Youtube = (props) => {
    return (
        <>
            <div className="col mb-5">
                <div className="card border-0 h-100">
                    <iframe className="card-img-top" src={props.video} frameborder={0} width={450} height={180} allowfullscreen/>
                    <div className="card-body" id="cardbody">
                        <div className="text-start">
                            <h5 className="fw-bolder">{props.judul}</h5>
                            <span className="text-muted">{props.nama}</span>
                            <p className="text-start">{props.deskripsi}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Youtube;