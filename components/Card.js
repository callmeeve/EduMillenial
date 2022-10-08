import Image from "next/image";
const Card = (props) => {
    return (
        <>
            <div className="col mb-5">
                <div className="card border-0 h-100">
                    <Image className="card-img-top" src={props.image} width={450} height={300} />
                    <div className="card-body" id="cardbody">
                        <div className="text-start">
                            <h5 className="fw-bolder">{props.judul}</h5>
                            <span className="text-muted text-decoration-line-through">{props.harga}</span>{props.diskon}
                        </div>
                    </div>
                    <div className="card-footer pt-0 border-top-0 bg-transparent" id="cardfooter">
                        <div className="text-start"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;