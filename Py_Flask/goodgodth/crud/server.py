from flask import (
    Flask,
    flash,
    jsonify,
    render_template,
    redirect,
    url_for,
    request,
    make_response,
    session,
)
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import json

app = Flask(__name__)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "mysql://product:product@192.168.2.35:33066/product"

db = SQLAlchemy(app)
ma = Marshmallow(app)


class Product(db.Model):
    product_id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(80), unique=True)
    product_price = db.Column(db.Integer, unique=True)

    def __init__(self, product_name, product_price):
        self.product_name = product_name
        self.product_price = product_price


class ProductSchema(ma.Schema):
    class Meta:
        fields = ("product_id", "product_name", "product_price")


product_schema = ProductSchema()
products_schema = ProductSchema(many=True)


@app.route("/", methods=["GET", "POST"])
def hello():
    response_body = {"message": "Hellow This is xcrud"}
    res = make_response(jsonify(response_body), 200)
    return res


@app.route("/showall", methods=["GET"])
def showall():
    try:
        all_products = Product.query.all()
        result = products_schema.dump(all_products)
        res = make_response(jsonify(result), 200)
        return res
    except:
        res = make_response({"result", "error"}, 500)
        return res


@app.route("/show/<int:id>", methods=["GET"])
def show(id):
    try:
        product = Product.query.get(id)
        res = make_response(product_schema.jsonify(product), 200)
        return res
    except:
        res = make_response({"result", "error"}, 500)
        return res


@app.route("/add", methods=["POST"])
def add():
    try:
        name = request.json["name"]
        price = request.json["price"]

        new_product = Product(name, price)
        db.session.add(new_product)
        db.session.commit()
        response_body = {"result": "success"}
        res = make_response(jsonify(response_body), 200)
        return res
    except:
        response_body = {"result": "unsuccess"}
        res = make_response(jsonify(response_body), 500)
        return res


@app.route("/update/<int:id>", methods=["POST"])
def update(id):
    try:
        data_body = request.json
        product = Product.query.filter_by(product_id=id).first()
        product.product_name = data_body["name"]
        product.product_price = data_body["price"]
        db.session.commit()
        response_body = {"result": "success"}
        res = make_response(jsonify(response_body), 200)
        return res
    except:
        response_body = {"result": "unsuccess"}
        res = make_response(jsonify(response_body), 500)
        return res


@app.route("/delete/<int:id>", methods=["GET"])
def delete(id):
    try:
        del_product = Product.query.filter_by(product_id=id).first()
        db.session.delete(del_product)
        db.session.commit()
        response_body = {"result": "success"}
        res = make_response(jsonify(response_body), 200)
        return res
    except:
        response_body = {"result": "unsuccess"}
        res = make_response(jsonify(response_body), 500)
        return res


@app.errorhandler(404)
def page_not_found(error):
    response_body = {"result": "page not found"}
    res = make_response(jsonify(response_body), 404)
    return res


if __name__ == "__main__":
    app.run(port=8080, host="0.0.0.0")
