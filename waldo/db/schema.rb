# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160417154146) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.integer  "puzzle_id"
    t.integer  "top"
    t.integer  "bottom"
    t.integer  "left"
    t.integer  "right"
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "characters", ["puzzle_id"], name: "index_characters_on_puzzle_id", using: :btree

  create_table "puzzles", force: :cascade do |t|
    t.string   "image"
    t.string   "title"
    t.string   "level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "toptime"
    t.string   "topholder"
  end

  add_foreign_key "characters", "puzzles"
end
