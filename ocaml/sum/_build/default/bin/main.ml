let () =
  let file = open_in "cal_doc.txt" in
  let total_sum = ref 0 in

  try
    while true do
      let str = input_line file in
      let len = String.length str in

      let rec find_first_digit i =
        if i < len then
          if str.[i] >= '0' && str.[i] <= '9' then
            str.[i]
          else
            find_first_digit (i + 1)
        else
          failwith "No digit found"
      in

      let rec find_last_digit i last_digit =
        if i < len then
          if str.[i] >= '0' && str.[i] <= '9' then
            find_last_digit (i + 1) str.[i]
          else
            find_last_digit (i + 1) last_digit
        else
          last_digit
      in

      let first_digit = find_first_digit 0 in
      let last_digit = find_last_digit 0 '0' in

      let first_digit_number = int_of_char first_digit - int_of_char '0' in
      let last_digit_number = int_of_char last_digit - int_of_char '0' in

      let two_digit_number = first_digit_number * 10 + last_digit_number in

      total_sum := !total_sum + two_digit_number
    done
  with End_of_file ->
    close_in file;
    Printf.printf "The total sum of two-digit number: %d\n" !total_sum
