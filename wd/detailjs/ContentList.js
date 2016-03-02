var React = require('react');
var ProList = require('./ProList.js');

var ContentList = React.createClass({
	createMarkup:function (){ 
        return {__html: this.props.data.product_base.detail_html};
    },
    render: function () {
        var data = this.props.data;
        var property = data.product_base.property;
        if(!Array.isArray(property)) throw new Error('error');
        var PropertyList=property.map(function(pro){
            return <ProList pid={pro.id} pvid={pro.vid} key={pro.id}/>
        })
        var url="buy.html?product_id="+data.product_id
        return (
                <div>
                    <div className="content">
                        <header>
                            <div className="detail_top">
                                <span className="banner_pic">
                                    <img src={data.product_base.main_img} alt=""/>
                                </span>
                                <srtong className="title">{data.product_base.name}</srtong>
                                <p>
                                    <span className="price">¥{data.sku_list[0].price/100}</span>
                                    <span className="sub_price">¥{data.sku_list[0].ori_price/100}</span>
                                </p>
                            </div>
                            <p className="buy_btn">
                                <a href={url}>购买</a>
                            </p>
                        </header>
                        <section className="list_hd">
                            <b>
                                商品详情
                            </b>
                        </section>
                        <section className="detail">
                           <div dangerouslySetInnerHTML={this.createMarkup()} />
                        </section>
                        <section className="list_hd">
                            <b>
                                商品参数
                            </b>
                        </section>
                        <section className="detail">
                           <table>
                                {PropertyList}
                           </table>
                        </section>
                    </div>
                </div>
        )
    }
})

module.exports = ContentList