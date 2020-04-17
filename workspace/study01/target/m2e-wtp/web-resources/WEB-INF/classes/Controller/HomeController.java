package Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HomeController {
	
	@RequestMapping("/his.do")
	public void test() {
		System.out.println("hi");
	}
	
	
	@GetMapping("/hisd.do")
	public Map<String, Object> test2() {
		System.out.println("hi");
		Map<String,Object> a = new HashMap<String, Object>();
		a.put("a", "b");
		return a;
	}
	
	@PostMapping("/login")
	public Map<String, Object> test3(@RequestBody Map<String, Object> param) {
		System.out.println("hi"+param);
		Map<String,Object> a = new HashMap<String, Object>();
		a.put("a", "b");
		return a;
	}

	
	
}
