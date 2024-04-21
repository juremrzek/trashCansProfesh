import { Trash } from "@/entities/Trash"
import { Can } from "@/entities/Can"

export interface Pair {
  trash: Trash
  can: Can
}

export class Level {
  pairs: Pair[]
  number_of_cans: number

  completed: boolean
  current_pair_index = 0
  current_pair: Pair | null = null
  failed = false

  constructor(pairs: Pair[], number_of_cans: number) {
    this.completed = false
    this.pairs = pairs
    this.number_of_cans = number_of_cans
  }

  getNextPair(): Pair | boolean {
    this.current_pair_index += 1

    if (this.current_pair_index >= this.pairs.length) {
      this.completed = true
      return false
    }

    this.current_pair = this.pairs[this.current_pair_index]

    return this.pairs[this.current_pair_index]
  }

  isCompleted() {
    return this.completed
  }

  fail() {
    this.failed = true
  }

  complete() {
    this.completed = true
  }
}
