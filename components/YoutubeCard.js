const YoutubeCard = (props) => {
    return (
        <>
            <div className="col mb-5">
                <div className="card border-0 h-100">
                    <iframe src={props.video} className="card-img-top" height={200} width={450} allowFullScreen />
                    <div className="card-body" id="cardbody">
                        <div className="text-start">
                            <h5 className="fw-bolder">{props.judul}</h5>
                            <p className="small font-weight-bold my-2">{props.nama}</p>
                            <span>
                                <i className="bi bi-star-fill" aria-hidden="true" />
                                <i className="bi bi-star-fill" aria-hidden="true" />
                                <i className="bi bi-star-fill" aria-hidden="true" />
                                <i className="bi bi-star-fill" aria-hidden="true" />
                                <i className="bi bi-star-fill" aria-hidden="true" />
                            </span>
                            <p className="desc-youtube">{props.deskripsi}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default YoutubeCard;