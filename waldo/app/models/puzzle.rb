class Puzzle < ActiveRecord::Base
  has_many :characters


  def character_location(id, x, y)
    focus = Character.find(id)
    x_range = [focus.left, focus.right]
    y_range = [focus.top, focus.bottom]
    valid = []

    if x >= x_range[0] && x<= x_range[1]
      valid << true
    else
      valid << false
    end

    if y >= y_range[0] && y<= y_range[1]
      valid << true
    else
      valid << false
    end

    if valid == [true, true]
      print "true"
    else
      print "false"
    end
  end

end
