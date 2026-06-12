#include <stdio.h>

void main(){
	int i=0, n=0, sum=0;
	
	scanf("%d", &n);
	while(n != 0){
		sum += (n%10);
		n /= 10;
	}
	printf("%d", sum);
}

