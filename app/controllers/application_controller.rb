require 'open-uri'
require 'mechanize'
require 'uri'

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  respond_to :json

  def angular

    chem_search_term = URI.encode("sulfolane")
    agent = Mechanize.new
    page = agent.get("http://www.sigmaaldrich.com/catalog/search?term=#{chem_search_term}&interface=All&N=0&mode=match%20partialmax&lang=en&region=US&focus=product")
    # get chemical name
    name = page.at("a .name").text
    # get properties
    properties = []
    page.at(".nonSynonymProperties").css("p").map do |p|
      property = p.text
      properties.push(property)
    end
    # get formula
    formula = properties[0].split(":").last
    formula[0] = "" #this is to remove weird white space left after split
    # get molecular weight (formula weight)
    fw = properties[1].split(":").last
    fw[0] = ""  #this is to remove weird white space left after split
    # get link with Projects text
    product_link = page.links_with(href: %r{^/catalog/product/aldrich/\w+})[0]
    product_page = product_link.click
    # get more properties from product page (generate arrays of strings of keys and values)
    more_properties = []
    product_page.search("#productDetailProperties td").text.squish.split(" ").map do |p|
      more_properties.push(p)
    end
    # get density (get index of "density" first; density value comes after "density" in more_properties array)
    density_index = more_properties.index("density")
    density = more_properties[density_index + 1]
    # get mp (get index of "mp" first; mp value comes after "mp" in more_properties array)
    mp_index = more_properties.index("mp")
    mp = more_properties[mp_index + 1]
    # get bp (get index of "bp" first; bp value comes after "bp" in more_properties array)
    bp_index = more_properties.index("bp")
    bp = more_properties[bp_index + 1]

    binding.pry

    render 'layouts/application'
  end

  #to solve CSRF token authenticity issue: use after_filter :set_csrf_cookie_for_ng and private method verified_request

  after_action :set_csrf_cookie_for_ng
  before_action :configure_permitted_parameters, if: :devise_controller?

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected
    def verified_request?
      super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    end

    def configure_permitted_parameters
      added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
      devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
      devise_parameter_sanitizer.permit :account_update, keys: added_attrs
    end


end
