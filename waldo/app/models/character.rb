class Character < ActiveRecord::Base
  belongs_to :puzzle
  validates :top, numericality: { only_integer: true }, presence: true
  validates :bottom, numericality: { only_integer: true, greater_than: :top }, presence: true
  validates :left, numericality: { only_integer: true }, presence: true
  validates :right, numericality: { only_integer: true, greater_than: :left }
  validates :name, presence: true

  def check_location(x, y)
    valid = []

    if x >= self.left && x <= self.right
      valid << true
    else
      valid << false
    end

    if y >= self.top && y <= self.bottom
      valid << true
    else
      valid << false
    end

    if valid == [true, true]
      return "true"
    else
      return "false"
    end
  end
end
