require 'test_helper'

class CharacterTest < ActiveSupport::TestCase
  def setup
    @character = Character.new(name: "Waldo", left: 400, right: 600, top: 500, bottom: 700)
  end

  test "should be valid" do
    assert @character.valid?
  end

  test "check character location" do
    assert(@character.check_location(600, 600))
  end
end
