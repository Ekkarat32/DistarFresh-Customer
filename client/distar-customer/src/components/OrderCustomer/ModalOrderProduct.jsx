import React from 'react'

const ModalOrderProduct = () => {
    return (
        <div className="modal fade" id="ModalDetailProducts" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">รายละเอียดสินค้า</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <div className="">
                            <div className="container">
                                <div className="row p-1 order_detail">
                                    <div className="col-md-6"><span className='order_detail_index'>รายการที่ 1 {/* {index + 1} */}</span> KALE {/* {order_detail.product_name} */}</div>
                                    <div className="col-md-5"><span className='order_detail_index'>จำนวน </span> 10 {/* {order_detail.quantity} */} หน่วย</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalOrderProduct