class PagesController < ApplicationController
  def home

    feature = rand(150)
    @product = Product.find(feature)

    render :homepage
  end
end
