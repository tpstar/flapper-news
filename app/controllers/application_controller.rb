class ApplicationController < ActionController::Base
  include ActionController::MimeResponds
  protect_from_forgery with: :exception


  def angular
    render 'layouts/application'
  end

  #to solve CSRF token authenticity issue: use after_filter :set_csrf_cookie_for_ng and private method verified_request

  after_filter :set_csrf_cookie_for_ng

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected

    def verified_request?
      super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    end

end
