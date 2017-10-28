require 'sinatra'

def find_listings
  3.times.map { random_listing }
end

def create_random_address
  "#{rand(200) + 1} #{['1st', '2nd', '3rd', 'Madison', 'Lexington', 'Park', '5th', '6th'].sample} Avenue"
end

def random_listing
  {
    address: create_random_address,
    location: 'New York'
  }
end

get '/' do
  @title = 'Rentals Comparison'
  @listings = find_listings
  erb :index
end
