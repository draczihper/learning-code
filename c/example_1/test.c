#include <stdio.h>

int main()
{
    FILE *file;

    file = fopen("hello.txt", "r");

    char my_string[100];

    while (fscanf(file, "%99s", my_string) == 1)
    {
        char first_digit_str, last_digit_str;
        for (int i = 0; my_string[i] != '\0'; i++)
        {
            if (my_string[i] >= '0' && my_string[i] <= '9')
            {
                first_digit_str = my_string[i];
                break;
            }
        }

        for (int i = 0; my_string[i] != '\0'; i++)
        {
            if (my_string[i] >= '0' && my_string[i] <= '9')
            {
                last_digit_str = my_string[i];
            }
        }

        printf("%c", first_digit_str);
        printf("%c", last_digit_str);
    }
    fclose(file);
    return 0;
}
