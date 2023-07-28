import React from "react";

const Komik = () => {

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <img src="" alt="" className="ratio ratio-4x3" />
                </div>
                <div className="col">
                    <h2>Jelajahi Excel</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum veniam libero facere officiis consequuntur aut deserunt hic id odio amet.</p>
                </div>
            </div>
            <div className="list-eps mt-5">
                <h2>List Episode</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col p-1">
                        <h4 className="border border-secondary rounded">Episode 1</h4>
                    </div>
                    <div className="col p-1">
                        <h4 className="border border-secondary rounded">Episode 1</h4>
                    </div>
                    <div className="col p-1">
                        <h4 className="border border-secondary rounded">Episode 1</h4>
                    </div>
                    <div className="col p-1">
                        <h4 className="border border-secondary rounded">Episode 1</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Komik;